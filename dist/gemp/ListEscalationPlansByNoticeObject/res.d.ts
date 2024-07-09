export interface ListEscalationPlansByNoticeObjectResponse {
    requestId: string;
    data: {
        escalationPlanId: number;
        escalationPlanName: string;
        escalationPlanScopeObjects: {
            scopeObjectId: number;
            scopeObjectName: string;
            scope: string;
            scopeObjectDeletedType: number;
        }[];
        status: string;
        modifyTime: string;
    }[];
}
