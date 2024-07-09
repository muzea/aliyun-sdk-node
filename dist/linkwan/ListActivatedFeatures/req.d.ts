export interface ListActivatedFeaturesRequest {
    /**
     * 当前的调用环境，默认为空，表示公共实例，如果是物联网平台实例化环境，请传入“IotInstance”
     * @example `IotInstance`
     */
    "Environment"?: string;
}
