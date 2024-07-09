export interface ListRouteRulesByServiceResponse {
    requestId: string;
    data: {
        id: number;
        ruleName: string;
    }[];
    totalCount: number;
}
