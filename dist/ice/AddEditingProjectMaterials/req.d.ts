export interface AddEditingProjectMaterialsRequest {
    /**
     * 云剪辑工程ID
     * @example `*****b2101cb318c*****`
     */
    "ProjectId": string;
    /**
     * 素材ID，多个素材以逗号（,）分隔；每种类型最多支持10个素材ID
     * - "video": 视频
     * - "audio": 音频
     * - "image": 图片
     * - "liveStream": 直播流
     * - "editingProject": 剪辑工程
     * @example `{"video":"*****2e057304fcd9b145c5cafc*****", "image":"****8021a8d493da643c8acd98*****,*****cb6307a4edea614d8b3f3c*****", "liveStream": "[{\"appName\":\"testrecord\",\"domainName\":\"test.alivecdn.com\",\"liveUrl\":\"rtmp://test.alivecdn.com/testrecord/teststream\",\"streamName\":\"teststream\"}]", "editingProject": "*****9b145c5cafc2e057304fcd*****"}`
     */
    "MaterialMaps": string;
}
