export interface DryRunSwaggerResponse {
    /**
     * 全局条件。
     * @example `{}`
     */
    GlobalCondition: string;
    /**
     * 本次请求的ID。
     * @example `EF924FE4-2EDD-4CD3-89EC-34E4708574E7`
     */
    RequestId: string;
    Success: {
        /**
         * 本次所有通过swagger导入成功的API信息
         */
        ApiDryRunSwaggerSuccess: {
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
             * API 的 Swagger 定义
             * @example `"A Swagger API definition in YAML"`
             */
            ApiSwagger: string;
            /**
             * 该API是创建（CREATE）或修改（MODIFY）
             * @example `CREATE`
             */
            ApiOperation: string;
            /**
             * 导入成功的API的UID
             * @example `8e274ec61cf6468e83b68371956831cb`
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
             * @example `api already exists : apiUid ===> 8e274ec61cf6468e83b68371956831cb`
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
             * @example `Not Found`
             */
            ErrorMsg: string;
            /**
             * 模型名字
             * @example `Region`
             */
            ModelName: string;
            /**
             * API 分组 ID
             * @example `36d4bcfaec1946e1870d90b2d7519710`
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
             * @example `ec1946e1870d90b2d7519`
             */
            ModelUid: string;
            /**
             * 模型名称
             * @example `NewInstance`
             */
            ModelName: string;
            /**
             * api分组id
             * @example `b2d552ed90ca435b86f7bf8d45414793`
             */
            GroupId: string;
            /**
             * 该模型是创建（CREATE）或修改（MODIFY）
             * @example `CREATE`
             */
            ModelOperation: string;
        }[];
    };
}
