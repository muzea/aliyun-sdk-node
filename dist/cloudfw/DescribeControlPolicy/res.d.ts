interface DescribeControlPolicyResponse {
    "TotalCount": number;
    "RequestId": string;
    "Policys": {
        "DestinationGroupCidrs": any[];
        "SourceGroupCidrs": any[];
        "ApplicationName": string;
        "Description": string;
        "HitTimes": number;
        "DestinationType": string;
        "SourceType": string;
        "Proto": string;
        "Order": number;
        "DestinationGroupType": string;
        "SourceGroupType": string;
        "ApplicationId": string;
        "Direction": string;
        "DestPortType": string;
        "Source": string;
        "DestPortGroup": string;
        "DestPort": string;
        "AclAction": string;
        "DestPortGroupPorts": any[];
        "AclUuid": string;
        "Destination": string;
    }[];
}
export { DescribeControlPolicyResponse };