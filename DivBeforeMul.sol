pragma solidity ^0.6.0;

import "SafeMath.sol";

contract DivideBeforeMulitiplication{
    
     using SafeMath for uint256;
    
     uint256 public number = 15792089237316195423570985008687907853269984665640564039457584007913129639935;
     uint256 public multplier = 1e18;
     uint256 public deci = 1e18;
    
     function inOrder() public view returns(uint256){
         
         return number.mul(deci).div(multplier);
         
         
         
     }
     
     function OutOfOrder() public view returns(uint256){
         
         return number.div(multplier).mul(deci);
         
         
         
     }
     
     function Max() external view returns(uint256 _max, string memory){
         
         uint256 no1 = OutOfOrder();
         uint256 no2 = inOrder();
         
         if(no2 > no1){
             
             return (no2, "no2");
         }
         
         else{
             
             return (no1, "no1");
             
         }
         
           
     }
     
     
     function max2() external view returns(uint){
         
         if(deci > number){
             
             return deci;
         }
         
         return number;
         
     }
     
     
     
     
}


// div before multiply does not always work , speciall in case of  large number
