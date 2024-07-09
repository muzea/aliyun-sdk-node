export interface UpdateProblemEffectionServiceRequest {
    /**
     * A short description of struct
     */
    "body"?: {
        /**
         * 关联服务id
         * @example `33`
         */
        serviceId: number;
        /**
         * 影响等级
         * @example `P1`
         */
        level: string;
        /**
         * 影响状态 0 未恢复 1已恢复
         * @example `UN_RECOVERED`
         */
        status: string;
        /**
         * 影响描述
         * @example `xxxx大厦`
         */
        description: string;
        /**
         * 图片地址
         */
        picUrl: string[];
        /**
         * 故障id
         * @example `190000000`
         */
        problemId: number;
        /**
         * 影响服务id
         * @example `103`
         */
        effectionServiceId: number;
        /**
         * clientToken
         * @example `c26f36de-1ec8-496a-a828-880676c5ef81`
         */
        clientToken: string;
    };
}
