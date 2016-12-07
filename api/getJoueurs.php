<?php
    $a = array();
    $a[] = array
    (
        "id"        => 1,
        "nom"    => "Abalo",
        "poste"       => "Ailier"
    );
    $a[] = array
    (
        "id"        => 2,
        "nom"    => "Karabatic",
        "poste"       => "demi-centre"
    );
    $a[] = array
    (
        "id"        => 3,
        "nom"    => "Walid",
        "poste"       => "ailier"
    );
    $a[] = array
    (
        "id"        => 4,
        "nom"    => "Demaltay",
        "poste"       => "arrière gauche"
    );

    header('Content-type: application/json');
    echo json_encode( $a );
?>
