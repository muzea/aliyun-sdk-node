export interface UpdateHookConfigurationRequest {
    /**
     * 应用ID
     * @example `d498****-1dd8ec229862`
     */
    "AppId": string;
    /**
     * 分组ID
     * @example `d498****-1dd8ec229862`
     */
    "GroupId"?: string;
    /**
     * 挂载脚本配置，为一段JSON格式文本，如：
     * `[{"ignoreFail":false,"name":"postprepareInstanceEnvironmentOnScaleOut","script":"ls"},{"ignoreFail":true,"name":"postdeleteInstanceDataOnScaleIn","script":""},{"ignoreFail":true,"name":"prestartInstance","script":""},{"ignoreFail":true,"name":"poststartInstance","script":""},{"ignoreFail":true,"name":"prestopInstance","script":""},{"ignoreFail":true,"name":"poststopInstance","script":""}]`
     * @example `[{"ignoreFail":false,"name":"postprepareInstanceEnvironmentOnScaleOut","script":"ls"}]`
     */
    "Hooks": string;
}
