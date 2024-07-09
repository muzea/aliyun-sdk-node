export interface GetTemplateResponse {
    /**
     * 模板内容
     * @example `"FormatVersion: OOS-2019-06-01\nDescription:\n  en:  Creates an ECS image\n  zh-cn: 创建一个ECS镜像\n  name-en: Create Image\n  name-zh-cn: 创建镜像\n  categories:\n    - image_manage\n    - application_manage\nParameters:\n  regionId:\n    Type: String\n    Label:\n      en: RegionId\n      zh-cn: 地域ID\n    AssociationProperty: RegionId\n    Default: '{{ ACS::RegionId }}'\n  instanceId:\n    Label:\n      en: InstanceId\n      zh-cn: ECS实例ID\n    Type: String\n    AssociationProperty: ALIYUN::ECS::Instance::InstanceId\n    AssociationPropertyMetadata:\n      RegionId: regionId\n  imageName:\n    Label:\n      en: ImageName\n      zh-cn: 新镜像的名称\n    Type: String\n    Description:\n      en: <p class=\"p\">Note:</p> <ul class=\"ul\"> <li class=\"li\">Length is 2~128 English or Chinese characters</li> <li class=\"li\"><font color='red'>must start with big or small letters or Chinese, not http:// and https://. </font></li> <li class=\"li\">Can contain numbers, colons (:), underscores (_), or dashes (-). </li> </ul>\n      zh-cn: <p class=\"p\">注意：</p> <ul class=\"ul\"> <li class=\"li\">长度为2~128个英文或中文字符</li> <li class=\"li\"><font color='red'>必须以大小字母或中文开头，不能以http://和https://开头。</font></li> <li class=\"li\">可以包含数字、半角冒号（:）、下划线（_）或者短划线（-）。</li> </ul>\n  tags:\n    Label:\n      en: Tags\n      zh-cn: 镜像标签\n    Type: Json\n    AssociationProperty: Tags\n    AssociationPropertyMetadata:\n      ShowSystem: false\n    Default: []\n  OOSAssumeRole:\n    Label:\n      en: OOSAssumeRole\n      zh-cn: OOS扮演的RAM角色\n    Type: String\n    Default: OOSServiceRole\nRamRole: '{{ OOSAssumeRole }}'\nTasks:\n- Name: createImage\n  Action: ACS::ECS::CreateImage\n  Description:\n    en: Create new image with the specified image name and instance ID\n    zh-cn: 通过指定实例ID和镜像名称创建新的镜像\n  Properties:\n    regionId: '{{ regionId }}'\n    imageName: '{{ imageName }}__on_{{ ACS::ExecutionId }}_at_{{ Acs::CurrentDate }}'\n    instanceId: '{{ instanceId }}'\n    tags: '{{tags}}'\n  Outputs:\n    imageId:\n      ValueSelector: imageId\n      Type: String\nOutputs:\n  imageId:\n    Type: String\n    Value: '{{ createImage.imageId }}'\nMetadata:\n  ALIYUN::OOS::Interface:\n    ParameterGroups:\n      - Parameters:\n          - regionId\n          - instanceId\n        Label:\n          default:\n            zh-cn: 选择实例\n            en: Select Ecs Instances\n      - Parameters:\n          - imageName\n          - tags\n        Label:\n          default:\n            zh-cn: 镜像设置\n            en: Image Configure\n      - Parameters:\n          - OOSAssumeRole\n        Label:\n          default:\n            zh-cn: 高级选项\n            en: Control Options"`
     */
    Content: string;
    /**
     * 请求ID
     * @example `5BBE2663-A18E-5261-9BBB-F4832F5294D9`
     */
    RequestId: string;
    /**
     * 模板元信息
     */
    Template: {
        /**
         * 模板内容的SHA256
         * @example `40fb5e3e08ef6c8a499ff7cd8441194f518028ad08338a84cb70c023a64576f1`
         */
        Hash: string;
        /**
         * 模板更新时间
         * @example `2022-04-26T08:37:07Z`
         */
        UpdatedDate: string;
        /**
         * 模板更新者
         * @example `ACS`
         */
        UpdatedBy: string;
        /**
         * 模板类型
         * @example `Automation`
         */
        TemplateType: string;
        /**
         * 标签键及值，键值对数量限制为1至20。
         * @example `{"k1":"k2","k2":"v2"}`
         */
        Tags: any;
        /**
         * 模板名称
         * @example `ACS-ECS-CreateImage`
         */
        TemplateName: string;
        /**
         * 模板版本。以“v”+数字的形式，数字从1开始。
         * @example `v15`
         */
        TemplateVersion: string;
        /**
         * 模板格式。系统字段判断，为JSON或YAML。
         * @example `YAML`
         */
        TemplateFormat: string;
        /**
         * 模板描述
         * @example `"{\"en\": \"Creates an ECS image\", \"zh-cn\": \"创建一个ECS镜像\", \"name-en\": \"Create Image\", \"name-zh-cn\": \"创建镜像\", \"categories\": [\"image_manage\", \"application_manage\"]}"`
         */
        Description: string;
        /**
         * 资源组ID
         * @example `rg-acfmxsn4m4******`
         */
        ResourceGroupId: string;
        /**
         * 模板创建者
         * @example `ACS`
         */
        CreatedBy: string;
        /**
         * 模板创建时间
         * @example `2019-05-16T10:26:14Z`
         */
        CreatedDate: string;
        /**
         * 版本名称
         * @example `version15`
         */
        VersionName: string;
        /**
         * 模板ID
         * @example `t-4bdb1745c171401883a2`
         */
        TemplateId: string;
        /**
         * 是否含有触发器
         * @example `false`
         */
        HasTrigger: boolean;
        /**
         * 模板共享类型。目前用户创建的模板的共享类型均为 Private。
         * @example `Public`
         */
        ShareType: string;
    };
}
