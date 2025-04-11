import PropTypes from "prop-types"
import dayjs from 'dayjs';

MapedArray.propTypes = {
    comments: PropTypes.func
  }

export default function MapedArray({ comments }){
    return(
        comments.slice().sort((a, b) => dayjs(b.dataFormatada, 'DD/MM/YYYY, HH:mm') - dayjs(a.dataFormatada, 'DD/MM/YYYY, HH:mm')).map((comment) => (
            <div className='eachComment' key={comment.id}>
            <strong>{comment.email}</strong>
            <p>Em: {comment.dataFormatada}</p>
            <p>{comment.comment}</p>
          </div>
        )) 
    )
}