import React, {Component} from "react";
import Listings from "../../components/Listings/Listings"
import Aux from "../../hoc/Aux";
import DetailsPage from "../../components/UI/Modal/Modal"

class ListingManager extends Component {

    state = {
        businesses: [
            {
                name:  "The Coffee Shop",
                phone: "562-455-1234"
            },
            {
                name:  "The Matcha Shop",
                phone: "562-455-4321"
            },
            {
                name:  "The Muffin Shop",
                phone: "562-455-1111"
            },
            {
                name:  "The Tea Shop",
                phone: "562-222-6969"
            },
            {
                name:  "The Steak Shop",
                phone: "714-455-6969"
            }
        ],
        openListingDetail: true
    }

    handleOpen = () => {
        this.setState({ openListingDetail: true });
    };
    
    handleClose = () => {
    this.setState({ openListingDetail: false });
    };


    render () {

        const listings = [...this.state.businesses];

        return (
            <Aux>
                <DetailsPage/>
                <div> ListingSearch </div>
                <Listings 
                    openListingDetail = {this.purchaseCancelHandler}
                    listings = {listings} />
            </Aux>
        );
    }

}

export default ListingManager;