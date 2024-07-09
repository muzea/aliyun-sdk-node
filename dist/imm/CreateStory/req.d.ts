export interface CreateStoryRequest {
    /**
     * 项目名称。获取方式请参见[创建项目](~~478153~~)。
     * @example `test-project`
     */
    "ProjectName": string;
    /**
     * 数据集名称。获取方式请参见[创建数据集](~~478160~~)。
     * @example `test-dataset`
     */
    "DatasetName": string;
    /**
     * 故事对象ID。该参数不是必填参数。如果为空，IMM会为生成的故事创建一个ID，该ID是故事的唯一标识符，可用于对该故事的查询、更新等操作。ID也可由用户生成，生成之后通过该参数传入，IMM可记录下用户传入的ID作为该故事的唯一标识。如果传入已存在的ID，则会更新该ID对应的故事。
     * @example `id1`
     */
    "ObjectId"?: string;
    /**
     * 故事类型，指定需要生成相册故事的类型。具体类型描述和可取值请参见[故事类型和子类型](~~475311~~)。
     * @example `PeopleMemory`
     */
    "StoryType": string;
    /**
     * 故事子类型，指定需要生成的相册故事的子类型，具体类型描述和可取值请参见[故事类型和子类型](~~475311~~)。
     * @example `Solo`
     */
    "StorySubType"?: string;
    /**
     * 待创建故事的照片集合的开始时间。与StoryEndTime共同组成时间区间，IMM会根据该时间区间来筛选候选照片生成故事。该参数是一个RFC3339时间格式的字符串。
     * @example `2016-12-30T16:00:00Z`
     */
    "StoryStartTime"?: string;
    /**
     * 待创建故事的照片集合的结束时间。与StoryStartTime共同组成时间区间，IMM会根据该时间区间来筛选候选照片生成故事。该参数是一个RFC3339时间格式的字符串。
     * @example `2021-12-30T16:00:00Z`
     */
    "StoryEndTime"?: string;
    /**
     * 故事名称。
     * @example `name1`
     */
    "StoryName"?: string;
    /**
     * 生成的故事中包含的照片文件最小个数，实际生成的故事照片数量会在MinFileCount和MaxFileCount之间。该参数取值为大于1的整数，若待生成故事的候选照片集中的可用照片张数小于该参数，则会返回空故事。
     * @example `1`
     */
    "MinFileCount"?: number;
    /**
     * 生成的故事中包含的照片文件最大个数，生成的故事照片数量会在MinFileCount和MaxFileCount之间。该参数取值范围为大于MinFileCount的整数。（为保证故事生成的效果，算法内部会将最大数量限制在1500，当MaxFileCount大于1500时，该参数没有效果）
     * @example `3`
     */
    "MaxFileCount"?: number;
    /**
     * 异步反向通知的TopicName。
     * @example `test-topic`
     */
    "NotifyTopicName"?: string;
    /**
     * 自定义标签。该标签标记了用户对该故事自定义的信息，可作检索使用。
     * @example `{"Bucket": "examplebucket"}`
     */
    "CustomLabels"?: any;
    /**
     * 自定义ID。用户自定义的生成故事的标识（可与ObjectID不相同），可供用户后期对故事进行检索、排序等。
     * @example `test`
     */
    "CustomId"?: string;
    /**
     * 待生成故事的地址信息。IMM会根据该参数标识出的地址位置信息，筛选拍摄地符合该地址信息的照片生成故事，该参数在故事类型为旅行故事（TravelMemory）时生效。
     * > 根据相关规定，无法在中国香港、中国澳门、中国台湾及海外提供将中国内地的GPS信息解析为地址的能力。
     * >
     */
    "Address"?: any;
    /**
     * 此参数提供一种标签机制，可在以下场景中使用：
     * - 设置自定义数据，这些数据会在MNS消息中返回。
     * - 作为搜索条件搜索任务。
     * - 作为变量在TargetURI中使用。
     * @example `{"key":"val"}`
     */
    "Tags"?: any;
    /**
     * 用户自定义信息，在异步消息通知中会为您返回，用于方便您系统内对消息通知进行关联处理。最大长度为2048字节。
     * @example `{"ID": "testuid","Name": "test-user","Avatar": "http://test.com/testuid"}`
     */
    "UserData"?: string;
    /**
     * 消息通知配置，详细内容请单击Notification查看，异步通知消息格式请参见[异步通知消息格式](~~471456~~)。
     */
    "Notification"?: any;
}
