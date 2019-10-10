interface DescribeSubConnectionsResponse {
    "UisSubConnections": {
        "UisSubConnection": {
            "Name": string;
            "Ip": string;
            "Description": string;
            "CreateTime": number;
            "UisSubConnectionId": string;
        }[];
    };
    "PageNumber": number;
    "TotalCount": number;
    "PageSize": number;
}
export { DescribeSubConnectionsResponse };