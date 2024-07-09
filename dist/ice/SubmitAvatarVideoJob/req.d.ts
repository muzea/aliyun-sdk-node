export interface SubmitAvatarVideoJobRequest {
    /**
     * 虚拟人任务输入参数。支持以文本、音频OSS文件、媒资作为输入。音频仅支持mp3或wav格式。
     * ><notice>Text 的输入内容长度不能少于 5 个字></notice>
     * @example `{"Text": "君不见黄河之水天上来，奔流到海不复回。君不见高堂明镜悲白发，朝如青丝暮成雪。"}`
     */
    "InputConfig"?: string;
    /**
     * 虚拟人任务配置信息，支持设置虚拟人id、人声、语速等信息
     * @example `{"AvatarId":"yunqiao"}`
     */
    "EditingConfig"?: string;
    /**
     * 任务输出信息，支持设置输出地址、成片分辨率信息
     * @example `{"MediaURL":"https://your-bucket.oss-cn-shanghai.aliyuncs.com/xxx.mp4","Width":1920,"Height":1080}`
     */
    "OutputConfig"?: string;
    /**
     * 任务标题，长度不超过128字节
     * @example `测试标题`
     */
    "Title"?: string;
    /**
     * 任务描述，长度不超过128字节
     * @example `测试描述`
     */
    "Description"?: string;
    /**
     * 用户自定义设置，可传入客户业务信息，如业务方环境、任务信息，JSON字符串格式。
     * @example `{"user":"data","env":"prod"}`
     */
    "UserData"?: string;
}
