export interface QueryStoriesRequest {
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
     * 故事对象ID。
     * @example `id1`
     */
    "ObjectId"?: string;
    /**
     * 故事名称。
     * @example `name1`
     */
    "StoryName"?: string;
    /**
     * 故事类型。可取值请参见[故事类型和子类型](~~475311~~)。
     * @example `TimeMemory`
     */
    "StoryType"?: string;
    /**
     * 故事子类型。可取值请参见[故事类型和子类型](~~475311~~)。
     * @example `SeasonHighlights`
     */
    "StorySubType"?: string;
    /**
     * 人物聚类的ID列表。
     */
    "FigureClusterIds"?: string[];
    /**
     * 创建故事时间范围。
     */
    "CreateTimeRange"?: any;
    /**
     * 创建故事照片或视频的开始时间范围。
     */
    "StoryStartTimeRange"?: any;
    /**
     * 创建故事照片或视频的结束时间范围。
     */
    "StoryEndTimeRange"?: any;
    /**
     * 在查询结果过多需要翻页时使用，标记当前开始读取的位置，置空表示从头开始；翻页读取时，则需传入上次调用该接口返回的NextToken值。
     * @example `MTIzNDU2Nzg6aW1tdGVzdDpleGFtcGxlYnVja2V0OmRhdGFzZXQwMDE6b3NzOi8vZXhhbXBsZWJ1Y2tldC9zYW1wbGVvYmplY3QxLmpw****`
     */
    "NextToken"?: string;
    /**
     * 本次读取的最大数据记录数量。取值范围为[1,100]。默认值为100。
     * @example `10`
     */
    "MaxResults"?: number;
    /**
     * 自定义标签键值对。查询满足此标签对的故事。
     * @example `key=value`
     */
    "CustomLabels"?: string;
    /**
     * 是否返回空故事。取值范围如下：
     * - true（默认）：返回空故事。
     * - false：不返会空故事。
     * @example `true`
     */
    "WithEmptyStories"?: boolean;
    /**
     * 排序字段，取值范围如下：
     * - CreateTime：按故事创建时间排序。
     * - StoryName：按故事名称排序。
     * - StoryStartTime：按故事开始时间排序
     * - StoryEndTime：按故事结束时间排序。
     * @example `CreateTime`
     */
    "Sort"?: string;
    /**
     * 排序方式。取值范围如下：
     * - asc：升序。
     * - desc：降序。
     * @example `asc`
     */
    "Order"?: string;
}
