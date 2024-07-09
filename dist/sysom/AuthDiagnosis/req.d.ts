export interface AuthDiagnosisRequest {
    /**
     * 请求体参数。
     */
    "body"?: {
        /**
         * 授权诊断的机器列表
         */
        instances: {
            /**
             * 实例ID。
             * @example `i-wz9b9vucz1iubsz8sjqo`
             */
            instance: string;
            /**
             * 地域ID。
             * @example `cn-hangzhou`
             */
            region: string;
        }[];
    };
}
