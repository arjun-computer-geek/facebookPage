import React from "react";
import { useRecoilValue } from "recoil";
import { activeConvState } from "../../atoms/atom";
import { User, Call } from "../icons";

function SenderProfile({ className }) {
	const activeConv = useRecoilValue(activeConvState);
	return (
		<div className={className + " bg-gray-200 bg-opacity-60"}>
			<div className='profile p-10 w-full text-center flex flex-col space-y-5 bg-white'>
				<div className='image flex justify-center'>
					<img
						src={"https://scontent.fdel11-1.fna.fbcdn.net/v/t1.6435-1/cp0/p60x60/106285171_3505469982807654_1685171694798644907_n.jpg?_nc_cat=102&ccb=1-4&_nc_sid=1eb0c7&_nc_ohc=37KnmTdbICoAX_05EXl&_nc_ht=scontent.fdel11-1.fna&oh=b7d14fee545a37f635f6b2fa8536ce42&oe=61362B97"}
						alt='senderimage'
						className='rounded-full h-20'
					/>
				</div>
				<div className='name-status'>
					<div className='name text-2xl font-semibold'>
						{activeConv.user.name}
					</div>
					<div className='status text-gray-400 font-semibold flex justify-center items-center space-x-2'>
						<div className='badge bg-gray-400 w-2 h-2 rounded-full'></div>{" "}
						<div>Online</div>
					</div>
				</div>
				<div className='buttons flex space-x-2 justify-center'>
					<button className='call-button flex space-x-1 px-4 py-2 font-bold text-gray-600 border-1 border-solid border-gray-600 rounded-md'>
						<Call fill='#000' className='h-6' />
						<div className='txt'>Call</div>
					</button>
					<button className='profile-button flex space-x-1 px-4 py-2 font-bold text-gray-600 border-1 border-solid border-gray-600 rounded-md'>
						<User className='h-6' />
						<div className='txt'>Profile</div>
					</button>
				</div>
			</div>
			<div className='cards p-2'>
				<div className='info-card bg-white rounded-md p-4'>
					<div className='title font-semibold text-xl'>Customer details</div>
					<div className='table w-full'>
						<table className='w-full'>
							<tbody>
								<tr className='grid grid-cols-10 py-2'>
									<td className='col-span-5 text-gray-400 font-semibold'>
										Email ID
									</td>
									<td className='col-span-5 text-right font-medium text-gray-900'>
										rsdecor1911@gmail.com
									</td>
								</tr>
								<tr className='grid grid-cols-10 py-2'>
									<td className='col-span-5 text-gray-400 font-semibold'>
										First Name
									</td>
									<td className='col-span-5 text-right font-medium text-gray-900'>
										{activeConv.user.name}
									</td>
								</tr>
								<tr className='grid grid-cols-10 py-2'>
									<td className='col-span-5 text-gray-400 font-semibold'>
										Last Name
									</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	);
}

export default SenderProfile;
