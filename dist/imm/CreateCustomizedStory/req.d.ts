export interface CreateCustomizedStoryRequest {
    /**
     * 项目名称。获取方式请参见[创建项目](~~478153~~)。
     * @example `immtest`
     */
    "ProjectName": string;
    /**
     * 数据集名称。获取方式请参见[创建数据集](~~478160~~)。
     * @example `dataset001`
     */
    "DatasetName": string;
    /**
     * 故事类型，指定需要生成相册故事的类型。具体类型描述和可取值请参见[故事类型和子类型](~~475311~~)。
     * @example `PeopleMemory`
     */
    "StoryType": string;
    /**
     * 故事子类型，指定需要生成的相册故事的子类型，具体类型描述和可取值请参见[故事类型和子类型](~~475311~~)。
     * @example `Solo`
     */
    "StorySubType": string;
    /**
     * 故事名称。
     * @example `name1`
     */
    "StoryName": string;
    /**
     * 故事封面。用户可以指定一个图片作为自定义故事的封面。
     */
    "Cover": {
        /**
         * 故事封面图片的地址。
         * @example `oss://test-bucket/test-object.jpg`
         */
        URI: string;
    };
    /**
     * 自定义故事的文件列表，每个自定义故事最多支持100个文件。
     */
    "Files": {
        /**
         * 故事文件列表地址。
         * @example `[
              {
                    "URI": "oss://test-bucket/test-object_1.jpg"
              },
        {
                    "URI": "oss://test-bucket/test-object_2.jpg"
              }
        ]`
         */
        URI: string;
    }[];
    /**
     * 自定义标签。该标签标记了用户对该故事自定义的信息，可作检索使用。
     * @example `{
          "MyStoryLabel": "HolidayStory"
    }`
     */
    "CustomLabels"?: any;
}
