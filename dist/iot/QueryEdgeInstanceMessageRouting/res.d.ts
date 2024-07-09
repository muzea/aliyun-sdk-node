export interface QueryEdgeInstanceMessageRoutingResponse {
    Code: string;
    ErrorMessage: string;
    RequestId: string;
    Success: boolean;
    Data: {
        CurrentPage: number;
        PageSize: number;
        Total: number;
        MessageRouteList: {
            MessageRoute: {
                GmtCreateTimestamp: number;
                TopicFilter: string;
                GmtModifiedTimestamp: number;
                TargetData: string;
                GmtCreate: string;
                SourceType: string;
                GmtModified: string;
                Name: string;
                RouteId: number;
                SourceData: string;
                TargetType: string;
                RouteContext: {
                    TargetApplicationName: string;
                    SourceApplicationName: string;
                    TargetFcFunctionName: string;
                    SourceFcFunctionName: string;
                    TargetFcServiceName: string;
                    SourceFcServiceName: string;
                    Qos: string;
                };
            }[];
        };
    };
}
