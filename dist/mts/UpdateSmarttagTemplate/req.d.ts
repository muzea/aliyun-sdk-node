export interface UpdateSmarttagTemplateRequest {
    /**
     * 模板ID。可以从[添加模板](~~187759~~)的返回参数中获取。
     * @example `05de22f255284c7a8d2aab535dde****`
     */
    "TemplateId": string;
    /**
     * 自定义模板名称，字符串内容中英文不限，最长120字符。
     * @example `template-example-****`
     */
    "TemplateName"?: string;
    /**
     * 待分析文件所处行业。默认值：**common**（通用行业）。请选择合适的行业，用于后台匹配适用于行业的算法组合。取值：
     * - **microVideo**：小视频行业。
     * - **common**：通用行业。
     * @example `common`
     */
    "Industry"?: string;
    /**
     * 使用场景，选择合适的使用场景，用于后台匹配适用的算法组合。取值：
     * - **search**：搜索场景。
     * - **recommend**：推荐场景。
     * - 默认**search**。
     * @example `search`
     */
    "Scene"?: string;
    /**
     * 分析类型，可多选，⽤半角逗号（,）分隔。当前有以下类型：
     * - **ocr**：从图像⽂字中识别出标签。
     * - **asr**：从⾳频语⾳中识别出标签。
     * - **classification**：视频分类。
     * - **shows**：视频识别节⽬。
     * - **face**：视频识别⼈脸。
     * - **role**：视频识别⼈物⻆⾊。
     * - **object**：视频识别物体。
     * - **tvstation**：视频识别台标。
     * - **action**：视频识别动作事件。
     * - **emotion**：视频识别表情。
     * - **landmark**：视频识别地标。
     * - **scene**：视频识别场景。
     * - **movielp**：视频识别影视IP。
     * - **subtitle**：字幕提取功能。
     * @example `ocr,asr`
     */
    "AnalyseTypes"?: string;
    /**
     * 参与识别的⼈脸库ID列表，可多选，⽤逗号隔开。可填⼊系统⼈脸库ID和⾃定义⼈脸库ID。其中系统⼈脸库ID如下：
     * - **celebrity**：明星⼈物。
     * - **politician**：政治⼈物。
     * - **sensitive**：敏感⼈物。
     * - 参数默认值：**celebrity**，**politician**，**sensitive**。
     * > ⾃定义⼈物库ID详⻅[⾃定义⼈脸接⼝说明](~~187777~~)。
     * @example `celebrity`
     */
    "FaceCategoryIds"?: string;
    /**
     * 人脸算法的参数，JSON String形式，目前支持人脸检测阈值和人脸识别阈值。
     * - **faceDetThreshold**：人脸检测阈值，默认阈值0.999，只对陌生人脸分析有效。
     * - **faceRegThreshold**：人脸识别阈值，默认阈值0.9。
     * @example `{ "faceDetThreshold":0.999, "faceRegThreshold":0.9 }`
     */
    "FaceCustomParamsConfig"?: string;
    /**
     * 参与识别的物体库ID列表，可多选，⽤半角逗号（,）分隔。可填⼊系统物体库ID和⾃定义物体库ID。其中系统物体库ID如下：
     * - **general**：通用。
     * - **item**：商品。
     * - **weapon**：武器。
     * - **animal**：动物。
     * @example `general,item,weapon,animal`
     */
    "ObjectGroupIds"?: string;
    /**
     * 参与识别的地域库ID列表，可多选，⽤半角逗号（,）分隔。可填⼊系统地域库ID和⾃定义地域库ID。其中系统地域库ID如下：
     * - **common**：通用。
     * @example `common`
     */
    "LandmarkGroupIds"?: string;
    /**
     * 是否默认模板，取值：
     * - **true**：是。
     * - **false**：否。
     * 默认**false**，⼀个⽤户只能有⼀个默认模板。
     * @example `true`
     */
    "IsDefault"?: boolean;
    /**
     * 标注类型，默认**auto**。目前支持类型：
     * - **auto**：机器打标。
     * - **hmi**：人机协同。
     * @example `hmi`
     */
    "LabelType"?: string;
    /**
     * 指定智能标签版本，默认为"1.0"。
     * - 1.0：智能标签1.0，
     * - 2.0：智能标签2.0（CPV标签）
     * - 2.0-custom：智能标签2.0-custom（CPV标签定制模型）
     * @example `1.0`
     */
    "LabelVersion"?: string;
    /**
     * 智能标签2.0和2.0-custom模式下，设置返回标签结果中识别到知识图谱信息字段范围。更多知识图谱信息请参见[智能标签接口知识图谱字段说明](~~356383~~)。不填写或者knowledgeConfig为空或者knowledgeConfig非法（不为JSON String）时，默认输出以下字段：
     * - movie：
     *     - name：IP名称
     *     - alias：IP别名
     *     - chnl：类别
     *     - genre：类型
     *     - country：制片国家、地区
     *     - language：语言
     *     -  releaseYear：发布年份
     * - music：
     *     - songName：歌曲名称
     *     - artistName：歌手姓名
     *     - artistArea：歌手所属地区，华语/日本/韩国/欧美/其他
     *     - albumName：专辑名称
     * - person：
     *     - name：姓名
     *     - gender：性别
     *     - citizenship：国籍
     *     -  occupation：职业
     *     - classification：类型
     *     - nationality：民族
     *     - birthPlace：出生地
     *     - birthDate：出生日期
     * - landmark
     *     - name：名称
     *     - nameEn：英文名
     *     - description：描述
     *     - address：地址
     * - item
     *     - brandName：品牌
     *     - finegrainName：细粒度描述
     * @example `{ "movie":"name,alias,chnl,genre", "music":"songName,artistName", "person":"name,gender" }`
     */
    "KnowledgeConfig"?: string;
    /**
     * 关键词标签配置。type代表词性类别选择，可多选，用半角逗号（,）分隔，当前有以下类别：
     * - name：人名
     * - location：地名
     * - organization：机构名
     * - other：其他
     * > 当不传KeywordConfig时或者Keyword字段非法（不为JSON String）或者KeywordsConfig不包含type字段或者type字段非法时默认返回type全部类型关键词。
     * @example `{ "type": "name,location,organization,other" }`
     */
    "KeywordConfig"?: string;
}
