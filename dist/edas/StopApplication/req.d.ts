export interface StopApplicationRequest {
    /**
     * 应用ID。可以通过调用ListApplication接口获取，具体操作，请参见[ListApplication](~~149390~~)。
     * @example `c627c157-560d*******`
     */
    "AppId": string;
    /**
     * 应用下需要停止的ECS实例的EccId。可以通过调用QueryApplicationStatus接口获取EccId，具体操作，请参见[QueryApplicationStatus](~~149394~~)。
     * - 如果包含多个ECS实例，用半角逗号（,）分开。
     * - 不设置该参数，表示停止该应用下所有实例。
     * @example `74ee9166-****1f6-bcb60e5b****`
     */
    "EccInfo"?: string;
}
