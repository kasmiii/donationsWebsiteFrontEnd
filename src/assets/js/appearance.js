
function showAssociationForm(){
    var atLeastOneIsChecked = $('input[name="checkbox-associator"]:checked').length;
    if(atLeastOneIsChecked>0){
        $('#associationForm').css('display','block');
    }
    else{
        $('#associationForm').css('display','none');
    }
}

/*function hideAssociationForm(){

}*/