export interface DeployRankingSystemRequest {
    /**
     * 实例id
     * @example `airec-test`
     */
    "instanceId"?: string;
    /**
     * 服务名称
     * @example `test`
     */
    "name"?: string;
    /**
     * 配置
     * @example `  "meta": {
        "autoDeploy": true,
        "autoDeployAuc": "0.9",
        "conf":"",
        "predictEngineType": "EAS",
        "predictEngine":{
            "resourceId": "eas-oljkkdrggxhx7eizjd"
        }
      }`
     */
    "body"?: any;
}
