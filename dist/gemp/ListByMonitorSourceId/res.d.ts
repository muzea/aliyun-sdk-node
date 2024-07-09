export interface ListByMonitorSourceIdResponse {
    /**
     *
     * @example `10REQUES-AC5C-4B59-BE11-378F117A6A88`
     */
    requestId: string;
    data: {
        id: number;
        ruleName: string;
    }[];
}
