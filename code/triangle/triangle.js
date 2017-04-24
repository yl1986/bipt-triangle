var triangle = {
    isEquilateral: function (a, b, c) {
            if (a != b) return false;
            if (b != c) return false;
            if (a <= 0) return false;
    		return true ;
    },
    isIsosceles: function (a, b, c) {
        if (a + b > c || a + c > b || b + c > a)
        {
            if (a == b) return true;
            if (a == c) return true;
            if (b == c) return true;
        }
    	return false ;
    },

    isScalene: function (a, b, c) {
        if (a + b > c || a + c > b || b + c > a) return true;
        return false;
    }
};

