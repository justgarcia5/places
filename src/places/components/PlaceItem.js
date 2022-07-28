import React, { useState, useContext } from 'react';

import Card from '../../shared/components/UIElements/Card';
import Button from '../../shared/components/FormElements/Button';
import Modal from '../../shared/components/UIElements/Modal';
import Map from '../../shared/components/UIElements/Map';
import { AuthContext } from '../../shared/context/auth-context';
import './PlaceItem.css';

const PlaceItem = props => {
  const [showMap, setShowMap] = useState(false);
  const [showConfirmModal, setShowConfimModal] = useState(false);
  const auth = useContext(AuthContext);

  const showMapHandler = () => setShowMap(true);

  const closeMapHandler = () => setShowMap(false);

  const showDeletePlacesModal = () => {
    setShowConfimModal(true);
  };

  const cancelDeletePlacesModal = () => {
    setShowConfimModal(false);
  };

  const confirmDeletePlacesHandler = () => {
    console.log('Deleting')
    setShowConfimModal(false);
  };

  return (
    <React.Fragment>
      <Modal
        show={showMap}
        onCancel={closeMapHandler}
        header={props.address}
        contentClass='place-item__modal-content'
        footerClass='pace-item__modal-actions'
        footer={<Button onClick={closeMapHandler}>ClOSE</Button>}
      >
        <div className='map-container'>
          <Map center={props.coordinates} zoom={16} />
        </div>
      </Modal>
      <Modal
        show={showConfirmModal}
        onCancel={cancelDeletePlacesModal}
        header='Are you sure?'
        footerClass='place-item__modal-action'
        footer={
          <React.Fragment>
            <Button onClick={cancelDeletePlacesModal} inverse>CANCEL</Button>
            <Button onClick={confirmDeletePlacesHandler} danger>DELETE</Button>
          </React.Fragment>
        }
      >
        <p>Do you want to delete this place?</p>
      </Modal>
      <li className='place-item'>
        <Card className='place-item__content'>
          <div className='place-item__image'>
            <img src={props.image} alt={props.title} />
          </div>
          <div className='place-item__info'>
            <h2>{props.title}</h2>
            <h3>{props.address}</h3>
            <p>{props.description}</p>
          </div>

          <div className='place-item__actions'>
            <Button onClick={showMapHandler} inverse>VIEW ON MAP</Button>
            {auth.isLoggedIn &&
              <React.Fragment>
                <Button to={`/places/${props.id}`}>EDIT</Button>
                <Button onClick={showDeletePlacesModal} danger>DELETE</Button>
              </React.Fragment>
            }
          </div>
        </Card>
      </li>
    </React.Fragment>
  )
}

export default PlaceItem;
