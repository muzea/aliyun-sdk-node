export interface GenerateImageTaskRequest {
    /**
     * 业务空间唯一标识：AgentKey
     * @example `e1be065b-adc3-435e-bd01-1c18c5ed75d3
    `
     */
    "AgentKey": string;
    /**
     * 段落内容
     */
    "ParagraphList": {
        /**
         * 段落ID
         * @example `1`
         */
        Id: number;
        /**
         * 段落内容
         * @example `一直忧伤的猫`
         */
        Content: string;
        /**
         * 任务ID 任务唯一标识
         * @example `e1be065b-adc3-435e-bd01-1c18c5ed75d3`
         */
        TaskId: string;
        /**
         * 当前任务状态 SUCCESSED=任务执行成功 ，FAILED=任务执行失败 ，CANCELED=任务被取消 ，PENDIN=任务排队中 ，SUSPENDE=任务挂起 RUNNIN=任务处理中
         * @example `SUCCESSED`
         */
        TaskStatus: string;
    }[];
    /**
     * 风格   "<photography>"=摄影, "<portrait>"=人像写真, "<3d cartoon>"=3D卡通, "<anime>"=动画, "<oil painting>"=油画, "<watercolor>"=水彩, "<sketch>"=素描, "<chinese painting>"=中国画, "<flat illustration>"=扁平插画, "<auto>"=默认
     * @example `<auto>`
     */
    "Style": string;
    /**
     * 大小 1024*1024', '720*1280', '1280*720'
     * @example `1024*1024`
     */
    "Size": string;
    /**
     * 文章taskId
     * @example `e1be065b-adc3-435e-bd01-1c18c5ed75d3`
     */
    "ArticleTaskId": string;
}
