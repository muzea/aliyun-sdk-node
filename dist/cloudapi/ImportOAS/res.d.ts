export interface ImportOASResponse {
    /**
     * 进行导入操作时生成的异步任务ID，用来查询导入任务的执行情况
     * @example `c16a1880f5164d779f6a54f64d997cd9`
     */
    OperationId: string;
    /**
     * 请求ID
     * @example `E7FE7172-AA75-5880-B6F7-C00893E9BC06`
     */
    RequestId: string;
    ErrorMessages: {
        /**
         * OAS定义中不支持的错误内容
         */
        ErrorMessage: string[];
    };
    WarningMessages: {
        /**
         * OAS定义中不支持的警告信息，可以忽略
         */
        WarningMessage: string[];
    };
    SuccessApis: {
        /**
         * 预检成功的API信息
         */
        SuccessApi: {
            /**
             * 创建API时配置的请求路径
             * @example `/st1`
             */
            Path: string;
            /**
             * 创建API时配置的HTTP方法
             * @example `POST`
             */
            HttpMethod: string;
            /**
             * API的ID。
             * @example `92af1abffc2443eaa2b815fdbd9c13f1`
             */
            ApiId: string;
            /**
             * 该API是创建（CREATE）或修改（MODIFY）
             * @example `CREATE`
             */
            ApiOperation: string;
        }[];
    };
    FailedApis: {
        /**
         * 预检失败的API信息
         */
        FailedApi: {
            /**
             * 创建API时配置的请求路径
             * @example `/st1`
             */
            Path: string;
            /**
             * 创建API时配置的HTTP方法
             * @example `POST`
             */
            HttpMethod: string;
            /**
             * 错误信息
             * @example `Invalid Api Definition.`
             */
            ErrorMsg: string;
        }[];
    };
    FailedModels: {
        /**
         * 预检失败的模型信息
         */
        FailedModel: {
            /**
             * 错误信息
             * @example `Invalid Model Definition.`
             */
            ErrorMsg: string;
            /**
             * 模型名称
             * @example `test`
             */
            ModelName: string;
            /**
             * API 分组 ID
             * @example `2c1bc62e19614cc68c6b0b484bc9c5db`
             */
            GroupId: string;
        }[];
    };
    SuccessModels: {
        /**
         * 预检成功的模型信息
         */
        SuccessModel: {
            /**
             * 模型uid
             * @example `1r4efwee19614cc68c6b0b484bc9c5dbs`
             */
            ModelUid: string;
            /**
             * 模型名称
             * @example `test`
             */
            ModelName: string;
            /**
             * API 分组 ID
             * @example `feaccf67040643bcbdedb253e59eb527`
             */
            GroupId: string;
            /**
             * 模型操作，创建（CREATE）或修改（MODIFY）
             * @example `CREATE`
             */
            ModelOperation: string;
        }[];
    };
}
