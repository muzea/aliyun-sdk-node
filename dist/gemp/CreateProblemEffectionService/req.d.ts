export interface CreateProblemEffectionServiceRequest {
    /**
     * A short description of struct
     */
    "body"?: {
        /**
         * 影响服务id
         * @example `170000000`
         */
        serviceId: number;
        /**
         * 影响等级
         * @example `P2`
         */
        level: string;
        /**
         * 影响状态 0 未恢复 1已恢复
         * @example `UN_RECOVERED`
         */
        status: string;
        /**
         * 影响描述
         * @example `erdwcdc`
         */
        description: string;
        /**
         * 图片地址
         */
        pictureUrl: string[];
        /**
         * 故障id
         * @example `150000000`
         */
        problemId: number;
        /**
         * clientToken
         * @example `e0b6735e-1a04-4d6b-a625-d2350612492c`
         */
        clientToken: string;
    };
}
