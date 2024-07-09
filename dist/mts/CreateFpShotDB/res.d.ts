export interface CreateFpShotDBResponse {
    /**
     * 请求ID。
     * @example `25818875-5F78-4A13-BEF6-D7393642CA58`
     */
    RequestId: string;
    /**
     * DNA库详细信息。
     */
    FpShotDB: {
        /**
         * DNA库描述。
         * @example `这是一个文本DNA库`
         */
        Description: string;
        /**
         * DNA库的状态。新建成功后默认为**offline**状态，待后台处理完成后会自动转换成**active**状态。
         * @example `offline`
         */
        State: string;
        /**
         * DNA库名称。
         * @example `example-name-****`
         */
        Name: string;
        /**
         * DNA库ID。建议您保存此ID便于后续调用其他相关接口时使用。
         * @example `88c6ca184c0e47098a5b665e2a12****`
         */
        FpDBId: string;
        /**
         * DNA库模型ID。
         * @example `11`
         */
        ModelId: number;
        /**
         * DNA库配置。
         * @example `null`
         */
        Config: string;
    };
}
