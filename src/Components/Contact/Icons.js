import React from 'react';
import {FaFacebookSquare, FaInstagram} from 'react-icons/fa';
import { Button } from 'react-bootstrap';
import "./icons.css"

export default function Icons() {

    return (
        <div className="container-sm md-auto">
        <Button variant="link" href="https://www.facebook.com/profile.php?id=100065611564908" target="_blank" aria-label="Facebook">
            <FaFacebookSquare className="facebook-icon" />
        </Button>
    <Button variant="link" href="https://www.instagram.com/soniespada/" target="_blank" aria-label="Instagram">
        <FaInstagram className="instagram-icon" />
    </Button>

        </div>

);
}

