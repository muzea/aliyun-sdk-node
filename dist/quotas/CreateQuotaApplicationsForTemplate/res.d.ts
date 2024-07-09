export interface CreateQuotaApplicationsForTemplateResponse {
    /**
     * 请求ID。
     * @example `8FF8CAF0-29D9-4F11-B6A4-FD2CBCA016D3`
     */
    RequestId: string;
    /**
     * 配额申请批次ID。
     * @example `d314d6ae-867d-484c-9009-3d421a80****`
     */
    BatchQuotaApplicationId: string;
    /**
     * 配额申请的资源目录成员的阿里云账号（主账号）列表。
     */
    AliyunUids: string[];
    /**
     * 配额申请失败的资源目录成员的阿里云账号（主账号）和失败原因列表。
     */
    FailResults: {
        /**
         * 配额申请失败的资源目录成员的阿里云账号（主账号）。
         * @example `135048337611****`
         */
        AliyunUid: string;
        /**
         * 失败原因。
         * @example `该配额申请处理中，不能继续申请。`
         */
        Reason: string;
    }[];
}
