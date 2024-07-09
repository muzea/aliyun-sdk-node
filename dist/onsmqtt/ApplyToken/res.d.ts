export interface ApplyTokenResponse {
    /**
     * 服务端返回的Token值。
     * > 请勿对返回的Token内容做任何长度、格式或规则的假设。以具体返回值为准。
     * @example `LzMT+XLFl5s/YWJ/MlDz4t/Lq5HC1iGU1P28HAMaxYxn8aQbALNtml7QZKl9L9kPe6LqUb95tEVo+zUqOogs9+jZwDUSzsd4X4qaD3n2TrBEuMOqKkk1Xdrvu9VBQQvIYbz7MJWZDYC3DlW7gLEr33Cuj54iIhagtBi3epStJitsssWs7otY9zhKOSZxhr49G3d0bh35mwyP18EMvDas8UlzeSozsSrujNUqZXOGK0PEBSd+rWMGDJlCt6GFmJgm2JFY7PJwf/7OOSmUYIYFs5o/PuPpoTMF+hcVXMs+0yDukIMTOzG9m3t8k36PVrghFmnK6pC3Rt3mibjW****ng==`
     */
    Token: string;
    /**
     * 公共参数，每个请求的ID都是唯一的。
     * @example `31782AAF-D0CC-44C3-ABFD-1B500276****`
     */
    RequestId: string;
}
