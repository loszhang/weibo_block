if ($response) {
    var jsonData = JSON.parse($response.body);
    if (jsonData && jsonData.statuses && Array.isArray(jsonData.statuses)) {
        var searchString = "漫威"; // 将要查找的字符串替换成你想要查找的内容
        var filteredStatuses = jsonData.statuses.filter(function(status) {
            // 检查每个 status 的 text 字段是否包含 searchString
            return !status.text.includes(searchString);
        });
        // 更新 statuses 数组
        jsonData.statuses = filteredStatuses;
        // 更新响应体
        $response.body = JSON.stringify(jsonData);
    }
}


$done(resp);