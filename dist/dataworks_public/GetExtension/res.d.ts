export interface GetExtensionResponse {
    /**
     * 请求的ID。用于定位日志，排查问题。
     * @example `0000-ABCD-EFG`
     */
    RequestId: string;
    /**
     * 扩展程序详情。
     */
    Extension: {
        /**
         * 扩展程序唯一码。
         * @example `ce4*********086da5`
         */
        ExtensionCode: string;
        /**
         * 扩展程序名称。
         * @example `扩展程序名称`
         */
        ExtensionName: string;
        /**
         * 扩展程序描述。
         * @example `这是一个描述`
         */
        ExtensionDesc: string;
        /**
         * 扩展程序帮助文档链接。
         * @example `https://www.aliyun.com/`
         */
        HelpDocUrl: string;
        /**
         * 扩展程序状态： 0：测试中, 1：上线中, 3：禁用中, 4：审批中, 5：审批通过, 6：审批不通过。
         * @example `0`
         */
        Status: number;
        /**
         * 测试用的项目空间，当扩展程序处于测试中时，只有测试项目空间可使用。
         * @example `13552`
         */
        ProjectTesting: number;
        /**
         * 扩展程序详情地址，用来扩展程序使用者查看本次被卡流程的详情。
         * @example `https://www.aliyun.com/`
         */
        DetailUrl: string;
        /**
         * 参数配置，参考[扩展程序参数配置](~~405354~~)。
         * @example `extension.project.disabled=projectId1,projectId2,projectId3`
         */
        ParameterSetting: string;
        /**
         * 选项配置。
         * @example `选项配置`
         */
        OptionSetting: string;
        /**
         * 扩展点列表。
         */
        BindEventList: {
            /**
             * 扩展点事件编码。
             * @example `commit-file`
             */
            EventCode: string;
            /**
             * 扩展点事件名称。
             * @example `文件提交前置事件`
             */
            EventName: string;
        }[];
        /**
         * 事件类型列表。
         */
        EventCategoryList: {
            /**
             * 事件类型编码。
             * @example `file-change`
             */
            CategoryCode: string;
            /**
             * 事件类型名称。
             * @example `文件变更事件`
             */
            CategoryName: string;
        }[];
    };
}
