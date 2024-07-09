export interface BillingStatisticsResponse {
    data: {
        ruleCount: number;
        ruleCountFree: number;
        subscriptionNotifyCount: number;
        subscriptionNotifyCountFree: number;
        escalationPlanCount: number;
        escalationPlanCountFree: number;
        hasScheduleServiceGroupCount: number;
        hasScheduleServiceGroupCountFree: number;
        appUserCount: number;
        appUserCountFree: number;
        eventReportApi: number;
        eventReportApiFree: number;
        smsSend: number;
        smsSendFree: number;
        voiceSend: number;
        voiceSendFree: number;
        emailSend: number;
        emailSendFree: number;
        imMsgSend: number;
        imMsgSendFree: number;
        type: boolean;
    };
    RequestId: string;
}
