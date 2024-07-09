export interface ListServiceGroupsByUserIdResponse {
    requestId: string;
    data: {
        serviceGroupId: number;
        isScheduled: boolean;
        serviceGroupName: string;
    };
}
