export interface GetDefaultDriveRequest {
    "domain_id": string;
    /**
     * 请求体参数。
     */
    "body"?: {
        /**
         * 用户 id，AK 访问时必填，AccessToken 访问时可选（默认取 AccessToken 关联的用户 id）
         * @example `c9b7a5aa04d14ae3867fdc886fa01da4`
         */
        user_id: string;
    };
}
