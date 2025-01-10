const translations = {
    en: {
        // Common UI Elements
        language: "EN",
        expand: "Expand",
        collapse: "Collapse",
        authorName: "AMINE BAGGARI",
        readMore: "Read More",
        close: "Close",
        
        // Navigation
        menu: {
            home: "Home",
            foods: "Amazigh Foods",
            clothes: "Amazigh Clothes",
            story: "Amazigh Story",
            wars: "Amazigh Wars",
            warsType: "Famous Personnel",
            actors: "Amazigh Actors",
            music: "Amazigh Musical Groups"
        },

        // Welcome Section
        welcome: {
            title: "Welcome to Amazigh Heritage",
            subtitle: "Discover the Rich Culture and History",
            description: "Explore the fascinating world of Amazigh culture, from traditional foods and clothing to historical stories and musical heritage."
        },

        // Foods Section
        foods: {
            title: "Traditional Amazigh Foods",
            couscous: {
                title: "Couscous",
                description: "A traditional North African dish of small steamed granules of rolled durum wheat semolina, typically served with a stew on top.",
                ingredients: [
                    "Semolina",
                    "Vegetables",
                    "Meat",
                    "Chickpeas",
                    "Spices"
                ],
                preparation: "Steamed multiple times in a couscoussier with aromatic spices and served with tender meat and vegetables."
            },
            tagine: {
                title: "Tagine",
                description: "A slow-cooked savory stew made in a traditional earthenware pot.",
                ingredients: [
                    "Meat (lamb, chicken, or beef)",
                    "Vegetables",
                    "Olives",
                    "Preserved lemons",
                    "Moroccan spices"
                ],
                preparation: "Slow-cooked in a conical clay pot that allows steam to circulate, creating tender meat and rich flavors."
            }
        },

        // Clothes Section
        clothes: {
            title: "Traditional Amazigh Clothes",
            subtitle: "Discover the Beauty of Traditional Attire",
            kaftan: {
                title: "Kaftan",
                description: "An elegant traditional garment worn by both men and women.",
                materials: [
                    "Fine silk",
                    "Cotton",
                    "Traditional embroidery",
                    "Precious stones"
                ]
            },
            jellaba: {
                title: "Jellaba",
                description: "A long, loose-fitting unisex outer robe with full sleeves.",
                materials: [
                    "Wool",
                    "Cotton",
                    "Traditional weaving",
                    "Natural dyes"
                ]
            }
        },

        // Wars Section
        wars: {
            title: "Historical Amazigh Wars",
            subtitle: "The Struggle for Freedom and Identity",
            rif: {
                title: "Rif War",
                period: "1921-1926",
                description: "A significant conflict between the Amazigh people of the Rif region and Spanish-French colonial forces."
            },
            resistance: {
                title: "Colonial Resistance",
                period: "1912-1934",
                description: "Various resistance movements against French and Spanish colonization."
            }
        },

        // Actors Section
        actors: {
            title: "Famous Amazigh Actors",
            subtitle: "Celebrating Amazigh Talent in Cinema",
            featured: {
                title: "Featured Artists",
                description: "Discover the talented Amazigh actors who have made their mark in national and international cinema."
            }
        },

        // Music Section
        music: {
            title: "Amazigh Musical Groups",
            subtitle: "Traditional and Modern Amazigh Music",
            traditional: {
                title: "Traditional Music",
                description: "Ancient musical traditions passed down through generations."
            },
            modern: {
                title: "Modern Fusion",
                description: "Contemporary artists blending traditional Amazigh music with modern styles."
            }
        }
    },

    ar: {
        // Common UI Elements
        language: "ع",
        expand: "توسيع",
        collapse: "تصغير",
        authorName: "أمين بقاري",
        readMore: "اقرأ المزيد",
        close: "إغلاق",
        
        // Navigation
        menu: {
            home: "الرئيسية",
            foods: "الأطعمة الأمازيغية",
            clothes: "الملابس الأمازيغية",
            story: "التاريخ الأمازيغي",
            wars: "الحروب الأمازيغية",
            warsType: "الشخصيات المشهورة",
            actors: "الممثلون الأمازيغ",
            music: "الفرق الموسيقية الأمازيغية"
        },

        // Welcome Section
        welcome: {
            title: "مرحباً بكم في التراث الأمازيغي",
            subtitle: "اكتشف الثقافة والتاريخ الغني",
            description: "استكشف عالم الثقافة الأمازيغية المذهل، من الأطعمة والملابس التقليدية إلى القصص التاريخية والتراث الموسيقي."
        },

        // Foods Section
        foods: {
            title: "الأطعمة الأمازيغية التقليدية",
            couscous: {
                title: "الكسكس",
                description: "طبق شمال أفريقي تقليدي من حبيبات السميد المبخرة، يقدم عادة مع المرق.",
                ingredients: [
                    "سميد",
                    "خضروات",
                    "لحم",
                    "حمص",
                    "توابل"
                ],
                preparation: "يتم تبخيره عدة مرات في الكسكاس مع التوابل العطرية ويقدم مع اللحم والخضروات الطرية."
            },
            tagine: {
                title: "الطاجين",
                description: "طبق مطهو ببطء في وعاء فخاري تقليدي.",
                ingredients: [
                    "لحم (خروف، دجاج، أو بقر)",
                    "خضروات",
                    "زيتون",
                    "ليمون مخلل",
                    "توابل مغربية"
                ],
                preparation: "يطهى ببطء في وعاء فخاري مخروطي يسمح بتدوير البخار، مما يجعل اللحم طرياً والنكهات غنية."
            }
        },

        // Clothes Section
        clothes: {
            title: "الملابس الأمازيغية التقليدية",
            subtitle: "اكتشف جمال الأزياء التقليدية",
            kaftan: {
                title: "القفطان",
                description: "لباس تقليدي أنيق يرتديه الرجال والنساء.",
                materials: [
                    "حرير فاخر",
                    "قطن",
                    "تطريز تقليدي",
                    "أحجار كريمة"
                ]
            },
            jellaba: {
                title: "الجلابة",
                description: "رداء خارجي فضفاض وطويل بأكمام كاملة.",
                materials: [
                    "صوف",
                    "قطن",
                    "نسيج تقليدي",
                    "أصباغ طبيعية"
                ]
            }
        },

        // Wars Section
        wars: {
            title: "الحروب الأمازيغية التاريخية",
            subtitle: "النضال من أجل الحرية والهوية",
            rif: {
                title: "حرب الريف",
                period: "1921-1926",
                description: "صراع مهم بين شعب الريف الأمازيغي والقوات الاستعمارية الإسبانية الفرنسية."
            },
            resistance: {
                title: "المقاومة الاستعمارية",
                period: "1912-1934",
                description: "حركات مقاومة مختلفة ضد الاستعمار الفرنسي والإسباني."
            }
        },

        // Actors Section
        actors: {
            title: "الممثلون الأمازيغ المشهورون",
            subtitle: "الاحتفال بالمواهب الأمازيغية في السينما",
            featured: {
                title: "الفنانون المميزون",
                description: "اكتشف الممثلين الأمازيغ الموهوبين الذين تركوا بصمتهم في السينما الوطنية والدولية."
            }
        },

        // Music Section
        music: {
            title: "الفرق الموسيقية الأمازيغية",
            subtitle: "الموسيقى الأمازيغية التقليدية والحديثة",
            traditional: {
                title: "الموسيقى التقليدية",
                description: "تقاليد موسيقية قديمة متوارثة عبر الأجيال."
            },
            modern: {
                title: "المزج الحديث",
                description: "فنانون معاصرون يمزجون الموسيقى الأمازيغية التقليدية مع الأساليب الحديثة."
            }
        }
    }
};
