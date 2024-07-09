export interface RestartApplicationRequest {
    /**
     * 应用ID。可以通过调用ListApplication接口获取，具体操作，请参见[ListApplication](~~149390~~)。
     * @example `c627c157-560d*******`
     */
    "AppId": string;
    /**
     * 应用中需要重启的ECS实例的EccId。可以通过调用QueryApplicationStatus接口获取EccId，具体操作，请参见[QueryApplicationStatus](~~149394~~)。
     * - 如果包含多个EccId，用半角逗号（,）分隔。
     * - 不设置该参数，表示重启该应用中的所有实例。
     * @example `006c0ea5-5f8d-4398-af1e-**********`
     */
    "EccInfo"?: string;
}
