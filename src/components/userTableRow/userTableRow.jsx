import defaultPicture from '../../assets/image/avatar/hombre.jpg';
import './userTableRow.css'

const URL = import.meta.env.VITE_SERVER_URL


export const UserTableRow = ({ usr, deleteUser, setFormValue }) => {
	const doesImageExist = (url) => {
		const img = new Image();
		img.src = url;
		return img.complete || img.width + img.height > 0;
	};
	return (
		<tr key={usr._id}>
			<td className="table-img">
			<img
				src={usr.image && doesImageExist(`${URL}/images/users/${usr.image}`) ? `${URL}/images/users/${usr.image}` : defaultPicture}
				alt={`${usr.name} profile picture`}
			/>
			</td>
			<td className="table-name">{usr.name}</td>
			<td className="table-email">{usr.email}</td>
			<td className="table-location">
				{usr.location.replace('_', ' ') ? (
					usr.location.replace('_', ' ')
				) : (
					<span className="no-data"> NO DATA</span>
				)}
			</td>
			<td className="table-role">{usr.role.replace('_ROLE', '')}</td>
			<td className="table-role">{usr.active.replace('_', ' ')}</td>
			<td className="table-actions">
				<div className='btn-container'>
				<button className="btn btn-delete" onClick={()=>deleteUser(usr._id)}>
					<i className="fa-solid fa-trash"></i>
				</button>
				<button className="btn btn-edit" onClick={()=>setFormValue(usr)}>
					<i className="fa-solid fa-pen-to-square"></i>
				</button>

				</div>
				
			</td>
		</tr>
	);
};