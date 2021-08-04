pragma solidity 0.8.0;

contract Test{
    
     bytes public _b;
     uint256 public m;
     address public sender;
    
      function _Encode(uint256 _in) public  returns(bytes memory){
          
         
         _b =  (abi.encode(_in, msg.sender));
         
         return _b;
                                    
                                    
           
      }
      
      
      function _decode(bytes calldata b) public returns(address, uint256){
          
          ( uint256 n, address _sender) = abi.decode(b, (uint256, address));
           m = n;
           sender = _sender;
          
         
      }
}
