
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract StudentDatabase {
    struct Student {
        string name;
        uint rollNo;
        string details;
    }
    
    mapping(uint => Student) public students;
    uint public totalStudents;
    
    event StudentAdded(string name, uint rollNo, string details);
    
    function addStudent(string memory _name, uint _rollNo, string memory _details) public {
        students[_rollNo] = Student(_name, _rollNo, _details);
        totalStudents++;
        emit StudentAdded(_name, _rollNo, _details);
    }
    
    function getStudent(uint _rollNo) public view returns (string memory, uint, string memory) {
        Student memory student = students[_rollNo];
        return (student.name, student.rollNo, student.details);
    }
}
