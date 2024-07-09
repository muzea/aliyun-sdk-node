export interface ListRouteRulesByAssignWhoIdResponse {
    requestId: string;
    data: {
        ruleName: string;
        id: number;
        tenantRamId: number;
    }[];
}
