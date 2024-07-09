export interface WakeUpAppRequest {
    /**
     * 服务请求入参。
     */
    "body": {
        /**
         * 应用拉起路径，类似在技能应用控制台中填的唤起链接。
         * @example `应用拉起路径`
         */
        Path: string;
        /**
         *
         * @example `2021****001`
         */
        SubjectId: string;
        /**
         * 要拉起的目标设备信息。
         */
        TargetInfo: {
            /**
             * 推送目标类型，获取到对应设备标识时的类型：
             * - `DEVICE_UNION_ID`：设备unionId
             * - `DEVICE_OPEN_ID`：设备openId
             * @example `DEVICE_OPEN_ID`
             */
            TargetType: string;
            /**
             * 推送目标类型对应的标识值。
             * @example `2VpiDQ6aMjxz******Eo7r6e08oIVZ3fKrm5TyEfY=`
             */
            TargetIdentity: string;
            /**
             * 组织标识，推送类型是`XX_UNION_XX`时才需要配。当存在多种途径获取猫精设备标识且又需要能互通的情况下需要找平台申请组织，申请通过后由平台分配得到。
             * @example `11`
             */
            OrganizationId: string;
            /**
             * 编码类型，获取猫精的设备标识的途径有多种，不同途径对应不同的编码类型：
             * - PACKAGE_NAME：apk包名
             * - SKILL_ID：技能ID
             * @example `PACKAGE_NAME`
             */
            EncodeType: string;
            /**
             * 编码类型对应的值。
             * - 编码类型是SKILLID时，其值为webhook服务中得到的skill ID。
             * - 编码类型是PACKAGENAME时，其值为对应客户端App的packageName。
             * @example `apk包名`
             */
            EncodeKey: string;
        };
        /**
         * 调试标识，当技能应用处于调试阶段时，设置此标识将决定获取技能应用信息时，是编辑态信息还是线上信息。
         * @example `true`
         */
        IsDebug: boolean;
    };
}
