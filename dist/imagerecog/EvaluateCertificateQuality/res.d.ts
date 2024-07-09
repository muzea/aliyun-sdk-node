export interface EvaluateCertificateQualityResponse {
    /**
     * 请求ID。
     * @example `656318DC-3856-43E3-9147-859532721AD6`
     */
    RequestId: string;
    /**
     * 返回的结果数据内容。
     */
    Data: {
        /**
         * 输出识别出的质量问题列表。
         */
        Elements: {
            /**
             * 问题类型。
             * - lackoffront： 缺乏正面照。
             * - copy：复印件。
             * - imageincomplete：证件图像不完整。
             * - nationalemblemincomplete：营业执照国徽不完整。
             * - lackofseal：缺乏印章。
             * - electronic：来源于电子档。
             * - reflection：反光。
             * > - 如果请求参数**Type**为IDCard，无lackofseal（缺乏印章）。
             * - 如果请求参数**Type**为BusinessLicense，无lackoffront（缺乏正面照）。
             * @example `lackoffront`
             */
            Value: string;
            /**
             * 是否通过检查。
             * - true：通过检查。
             * - false：未通过检查。
             * - verify：无法检验证照质量，请人工确认。
             * - ERROR：该模块算法推理失败。
             * @example `false`
             */
            Pass: string;
            /**
             * 质量问题分值，分值越高，问题越严重，取值为0~100之间的整数。
             * - 当系统无法给出分值时，输出结果为`score`。
             * - 当**Pass**字段为`ERROR`时，输出结果为`null`。
             * @example `0.06514739990234375`
             */
            Score: string;
        }[];
    };
}
