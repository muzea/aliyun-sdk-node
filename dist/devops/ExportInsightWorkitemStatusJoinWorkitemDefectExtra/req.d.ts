export interface ExportInsightWorkitemStatusJoinWorkitemDefectExtraRequest {
    /**
     * 企业标识，也称企业 id，字符串形式，可在云效访问链接中获取，如 https://devops.aliyun.com/organization/#{organizationId}
     * @example `61db9af2148974246bexxxx
    `
     */
    "organizationId": string;
    /**
     * 请求body
     */
    "body"?: {
        /**
         * 开始时间。和结束时间间隔不超过1年。
         * @example `2024-05-01 00:00:00
        `
         */
        startTime: string;
        /**
         * 结束时间。和开始时间间隔不超过1年。
         * @example `2024-06-01 00:00:00
        `
         */
        endTime: string;
        /**
         * 下一页token
         * @example `1`
         */
        nextToken: string;
        /**
         * 最大结果条数
         * @example `10`
         */
        maxResults: number;
    };
}
