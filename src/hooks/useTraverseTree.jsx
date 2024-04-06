import React from 'react';

const useTraverseTree = () => {

    //Add Logic

    function insertNode(tree, empId, member,email,phoneNo, hasSubordinates){
        if(tree.id === empId && tree.hasSubordinates){
            tree.members.unshift(
                {
                    id: new Date().getTime(),
                    name: member,
                    email: email,
                    phoneNumber: phoneNo,
                    hasSubordinates,
                    members: [],
                });
            return tree;
        }

        let latestNode = [];
        latestNode = tree.members.map((obj) => {
            return insertNode(obj, empId, member,email,phoneNo, hasSubordinates);
        });

       return { ...tree, members: latestNode };
    }

    //Update Logic

    function updateNode(tree, empId, member, email, phoneNo, hasSubordinates) {
      if (tree.id === empId) {
        tree.name = member;
        tree.email = email; 
        tree.phoneNumber = phoneNo; 
        tree.hasSubordinates = hasSubordinates; 
        return tree;
    }

    const updatedNode = tree.members.map((obj) => updateNode(obj, empId, member, email, phoneNo, hasSubordinates));
    return { ...tree, members: updatedNode };
      }

    //Delete Logic

    function deleteNode(tree, empId) {
        const deletedItems = tree.members.filter((obj) => obj.id !== empId);
    
        if (deletedItems.length === 0 && tree.members.length === 1) {
            return false;
        }

        if (deletedItems.length === tree.members.length) {
          const temp = tree.members.map((obj) => deleteNode(obj, empId));
          return { ...tree, members: temp };
        }
    
        return { ...tree, members: deletedItems };

        
      }

 

  return { insertNode, updateNode, deleteNode };
};


export default useTraverseTree;
