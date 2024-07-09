export interface ImportSwaggerResponse {
    /**
     * 本次请求ID
     * @example `647CEF05-404C-4125-B3D7-44792EB77392`
     */
    RequestId: string;
    Success: {
        /**
         * 本次所有通过swagger导入成功的API信息
         */
        ApiImportSwaggerSuccess: {
            /**
             * 创建API时配置的请求路径
             * @example `/http/get/mapping`
             */
            Path: string;
            /**
             * 创建API时配置的http方法
             * @example `get`
             */
            HttpMethod: string;
            /**
             * 该API是创建（CREATE）或修改（MODIFY）
             * @example `CREATE`
             */
            ApiOperation: string;
            /**
             * 导入成功的API的UID
             * @example `8e274ec61cf6468e83b683719568****`
             */
            ApiUid: string;
        }[];
    };
    Failed: {
        /**
         * 本次所有通过swagger导入失败的API信息
         */
        ApiImportSwaggerFailed: {
            /**
             * 创建API时配置的请求路径
             * @example `/http/get/mapping`
             */
            Path: string;
            /**
             * 创建API时配置的http方法
             * @example `post`
             */
            HttpMethod: string;
            /**
             * 创建API时返回的错误信息
             * @example `api already exists : apiUid ===> 8e274ec61cf6468e83b683719568****`
             */
            ErrorMsg: string;
        }[];
    };
    ModelFailed: {
        /**
         * 本次所有通过 swagger 导入失败的 Model 信息。
         */
        ApiImportModelFailed: {
            /**
             * 错误信息
             * @example `error msg`
             */
            ErrorMsg: string;
            /**
             * 模型名称
             * @example `Region`
             */
            ModelName: string;
            /**
             * API 分组 ID
             * @example `36d4bcfaec1946e1870d90b2d751****`
             */
            GroupId: string;
        }[];
    };
    ModelSuccess: {
        /**
         * 本次所有通过 swagger 导入成功的 Model 信息。
         */
        ApiImportModelSuccess: {
            /**
             * 模型uid
             * @example `d4bcfaec1946e1870d`
             */
            ModelUid: string;
            /**
             * 模型名称
             * @example `NewInstance`
             */
            ModelName: string;
            /**
             * api分组id
             * @example `b2d552ed90ca435b86f7bf8d4541****`
             */
            GroupId: string;
            /**
             * 模型操作
             */
            ModelOperation: string;
        }[];
    };
}
