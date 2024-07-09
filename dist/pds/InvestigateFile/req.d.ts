export interface InvestigateFileRequest {
    "domain_id": string;
    /**
     * 请求体。
     */
    "body"?: {
        /**
         * 空间和文件ID的组合，至多5个。
         */
        drive_file_ids: {
            /**
             * 空间ID
             * @example `1`
             */
            drive_id: string;
            /**
             * 文件ID
             * @example `9520943DC264`
             */
            file_id: string;
        }[];
        recursive: boolean;
        user_data: string;
        policy: {
            first_product_name: string;
            mtee_code: string;
            provider: string;
        };
    };
}
