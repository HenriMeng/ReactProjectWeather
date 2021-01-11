const ZippopotamFinal = (setCities, country, postalCode) => {
    fetch(`http://api.zippopotam.us/${country}/${postalCode}`)
        .then(res => res.json())
            .then(data => {
                console.log(`http://api.zippopotam.us/${country}/${postalCode}`);
                console.log(data);

                let res = [data.places.length];
                data.places.forEach(element => {
                    res.push({ value: element["place name"], label: element["place name"] });
                });
                console.log(res);

                setCities(res);
            })
        .catch((error) => {
            console.log(error);
        }
    )
}

export default ZippopotamFinal;