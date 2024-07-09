export interface ListAnalyticsDataRequest {
    /**
     * API所在实例的实例ID。
     * 更多信息，请参见[如何获取实例ID](~~267533~~)。
     * @example `iot-cn-npk1u******`
     */
    "IotInstanceId": string;
    /**
     * API路径。
     * 您可在**数据API**的API详情页面，查看**API Path**的值。具体操作，请参见[查看与使用](~~206247~~)。
     * @example `/iot-cn-npk1v******​/system/query/hist_dev_cnt_stat`
     */
    "ApiPath": string;
    /**
     * 指定显示返回结果中的第几页的内容。默认值为 1。
     * @example `1`
     */
    "PageNum"?: number;
    /**
     * 每页显示结果的条数。
     * 返回结果中，每页显示的记录数量。最大取值100，最小取值1，默认取值为100。
     * > 开启分页时必传。
     * @example `100`
     */
    "PageSize"?: number;
    /**
     * 逻辑隔离ID。请忽略该参数。
     * @example `oxs_iso_id`
     */
    "IsoId"?: string;
    /**
     * 查询条件列表。
     */
    "Condition"?: {
        /**
         * 比较运算符。
         * 仅支持`bt`、`eq`、`neq`、`rlike`、`in`或`nin`，及其对应的操作符`BETWEEN`、`=`、`!=`、`LIKE`、`IN`、`NIN`。
         * 您可在**数据API**的API详情页面，查看请求参数的对应操作符。具体操作，请参见[查看与使用](~~206247~~)。
         * - `BETWEEN`：请求参数赋值为特定范围。
         * - `=`：请求参数赋值为特定值。
         * - `!=`：请求参数赋值不为特定值。
         * - `LIKE`：请求参数赋值以特定值为首。
         * - `IN`：请求参数赋值属于特定集合。
         * - `NIN`：请求参数赋值不属于特定集合。
         * 例如，数据集有6条记录（对应的`time`分别为`abcd`、`abce`、`abcf`、`abcg`、`aabc`和`abbc`），调用该接口时，`Condition.N.FieldName="time"`：
         * - 如果`Condition.N.Operate="LIKE"`、`Condition.N.Value="abc"`，则返回`time=abcd`、`time=abce`、`time=abcf`和`time=abcg`的所有记录。
         * - 如果`Condition.N.Operate="IN"`、`Condition.N.Value="[abcd,abce,abcf]"`，则返回`time=abcd`、`time=abce`和`time=abcf`的所有记录。
         * > 如果该参数取值为`BETWEEN`，则**Condition.N.BetweenStart**和**Condition.N.BetweenEnd**必传。如果该参数取值不为`BETWEEN`，则**Condition.N.Value**必传。
         * @example `=`
         */
        Operate: string;
        /**
         * 比较值。即服务API请求参数的赋值。
         * 您可在**数据API**的API详情页面，查看请求参数的赋值情况。具体操作，请参见[查看与使用](~~206247~~)。
         * > 当**Condition.N.Operate**取值不为`BETWEEN`或`bt`时，该参数必传，且不传**Condition.N.BetweenStart**和**Condition.N.BetweenEnd**。
         * @example `4`
         */
        Value: string;
        /**
         * 对应服务API设置的请求参数名。
         * 您可在**数据API**的API详情页面，查看**请求参数**的值。具体操作，请参见[查看与使用](~~206247~~)。
         * @example `testCode`
         */
        FieldName: string;
        /**
         * 服务API请求参数表示范围时的终止值。
         * 您可在**数据API**的API详情页面，查看请求参数的取值范围。具体操作，请参见[查看与使用](~~206247~~)。
         * > 当**Condition.N.Operate**取值为`BETWEEN`或`bt`时，该参数必传，且不传**Condition.N.Value**。
         * @example `5`
         */
        BetweenEnd: string;
        /**
         * 服务API请求参数表示范围时的起始值。
         * 您可在**数据API**的API详情页面，查看请求参数的取值范围。具体操作，请参见[查看与使用](~~206247~~)。
         * > 当**Condition.N.Operate**取值为`BETWEEN`或`bt`时，该参数必传，且不传**Condition.N.Value**。
         * @example `1`
         */
        BetweenStart: string;
    }[];
}
